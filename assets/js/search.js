$( document ).ready(function() {
    function getResults(params) {
        $('#results-list').empty();
        $('.facet-list').empty();
        $('.sidebar').addClass('is-hidden');
        $('#results-summary').empty();
        $('.pagination').addClass('is-hidden');
        $('#search_button').addClass('is-loading');
        $.getJSON('https://wraggedata.xyz/dfatdocs/', data=params, function(data) {
            window.history.pushState({}, null, '?' + $.param(params));
            const total = data['total']['value'];
            console.log(total);
            let oldStart = parseInt(params['start'], 10)
            let newStart = parseInt(params['start'], 10) + 20;
            console.log(oldStart);
            $.each(data.hits, function(index, hit) {
                let doc_title = hit._source.title;
                let doc_date = moment(hit._source.date).format('D MMMM YYYY')
                let doc_num = 'Document ';
                if (parseInt(hit._source.doc_num, 10) != 0) {
                    doc_num += hit._source.doc_num;
                } else {
                    doc_num += 'unnumbered'
                }
                $('#results-list').append($('<dt class="is-uppercase has-text-weight-bold"><a href="../volumes/' + hit._source.doc_path + '">' + doc_title + '</a></dt>'));
                $('#results-list').append($('<dd>' + doc_date + ', ' + doc_num + ', ' + hit._source.vol_full_title + '</dd>'));
                let highlights = $('<ul class="highlights is-italic">');
                if ('highlight' in hit && 'content' in hit.highlight) {
                    $.each(hit.highlight.content, function(index, highlight) {
                        highlights.append($('<li class="is-size-6">&lsquo;&hellip;' + highlight + '&hellip;&rsquo;</li>'));
                    });
                    $('#results-list').append($('<dd>').append(highlights));
                }
            });
            let year_params = $.extend({}, params);
            $.each(data.aggregations.documents_per_year.buckets.slice(0, 10), function(index, bucket) {
                if (parseInt(bucket.doc_count, 10) > 0 ) {
                    let year = moment(bucket.key_as_string).format('YYYY');
                    year_params.start = 0;
                    year_params.start_date = year + '-01-01';
                    year_params.end_date = year + '-12-31';
                    $('#documents_per_year').append($('<li>' + year + ': <a href="?' + $.param(year_params) + '">' + bucket.doc_count + '</a></li>'))
                }
            });
            let vol_params = $.extend({}, params);
            $.each(data.aggregations.documents_per_volume.buckets, function(index, bucket) {
                let vol_id = bucket.key;
                vol_params.start = 0;
                vol_params.volume = vol_id;
                $('#documents_per_volume').append($('<li>Volume ' + vol_id + ': <a href="?' + $.param(vol_params) + '">' + bucket.doc_count + '</a></li>'))
            });
            let series_params = $.extend({}, params);
            $.each(data.aggregations.documents_per_series.buckets, function(index, bucket) {
                let series_id = bucket.key;
                series_params.start = 0;
                series_params.series = series_id;
                $('#documents_per_series').append($('<li>' + series_id + ': <a href="?' + $.param(series_params) + '">' + bucket.doc_count + '</a></li>'))
            });
            if (total > 20) {
                $('.pagination').removeClass('is-hidden');
            }
            if (oldStart > 0) {
                params['start'] = oldStart - 20;
                $('.pagination-previous').removeAttr('disabled').prop('href', '?' + $.param(params));
            } else {
                console.log('hello');
                $('.pagination-previous').attr('disabled', 'disabled');
            }
            if (newStart < total) {
                params['start'] = newStart;
                $('.pagination-next').removeAttr('disabled').prop('href', '?' + $.param(params));
            } else {
                $('.pagination-next').attr('disabled', 'disabled');
            }
            if (total == 0) {
                $('#results-summary').text('No results!');
            } else if (total < 20) {
                $('#results-summary').text('Showing ' + (oldStart + 1) + ' to ' + total + ' of ' + total + ' results');
            } else {
                $('#results-summary').text('Showing ' + (oldStart + 1) + ' to ' + newStart + ' of ' + total + ' results');
            }
            $('.sidebar').removeClass('is-hidden');
            $('#search_button').removeClass('is-loading');
        });
    }

    const searchParams = new URLSearchParams(window.location.search);
    params = {};
    for(var param of searchParams.entries()) {
        params[param[0]] = param[1];
    }
    if (!$.isEmptyObject(params)) {
        $('#query').val(params['query']);
        $('#query_type').val(params['query_type']);
        $('#fields').val(params['fields']);
        $('#volume').val(params['volume']);
        $('#start_date').val(params['start_date']);
        $('#end_date').val(params['end_date']);
        $('#series').val(params['series']);
        $('#barcode').val(params['barcodes']);
        getResults(params);
    }
    $('#search_button').click(function(e) {
        e.preventDefault(e);
        console.log($('#end_date').val());
        params = {
            'query': $('#query').val(),
            'query_type': $('#query_type').val(),
            'fields': $('#fields').val(),
            'volume': $('#volume').val(),
            'start_date': $('#start_date').val(),
            'end_date': $('#end_date').val(),
            'series': $('#series').val(),
            'barcodes': $('#barcode').val(),
            'sort': $('#sort').val(),
            'start': 0
        }
        getResults(params);
    });
    $('#clear_button').click(function(e) {
        $('input').val('');
        $('#query_type').val('and');
        $('#fields').val('text');
        $('#volume').val('');
        window.history.pushState({}, null, '');
    });


});
