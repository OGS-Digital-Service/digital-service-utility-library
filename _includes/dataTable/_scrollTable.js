    (function($) {
    $(document).ready(function() {
       new DataTable('#{{params.tableName}}', {
            columnDefs: [{ 
                orderable: true, 
                targets: [0,1,2,3],  
                render: function(data, type, row, meta) {
                    if (type != 'display') {
                    return data.replace( /<.*?>/g, '' );
                    }
                    return data;
                    }
                
                
                
                }],
                layout: {
                            
                            topStart: {
                                search: {
                                    placeholder: '{{params.searchPlaceholder}}'
                                }
                            },
                            topEnd: 'info',
                            bottomStart: null,
                            bottomEnd: null,
                            bottom: 'paging'
                        },
            order: [[1, 'asc']],
            scrollX: true
           
        });
        
        
        
    } );

    $(document).ready(function() {
    const searchInput = document.getElementById("dt-search-0");
        const clearAll = document.getElementById("clear");
        const tableId = '#{{params.tableName}}'
        console.log(tableId)
        searchInput.insertAdjacentHTML('afterend','<button class="nysds-reset-button" id="clear"> Reset </button>')
        $('#clear').on('click', () => {
            $(tableId).DataTable().search('').columns().search('').draw();
            })
     } );

     })(jQuery);
