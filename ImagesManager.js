var filter_category = '';
var datatable;

$(function(){


	$("#filter_category").change(function() {
		//$(this).parents("form").submit();
		filter_category = $(this).val();
		// refresh data table
		datatable.fnDraw();
	});

	if( $("#filter_category:selected") ){
		filter_category = $("#filter_category option:selected").val();
		// refresh data table
		//datatable.fnDraw();
	}

	var datatable = $('.dataTable').dataTable({
		"sPaginationType": "full_numbers",
		"bJQueryUI": true,
		"bStateSave": true,

		"oLanguage": {
			"sProcessing": config.ImagesManager.sProcessing,
			"sLengthMenu": config.ImagesManager.sLengthMenu,
			"sZeroRecords": config.ImagesManager.sZeroRecords,
			"sEmptyTable": config.ImagesManager.sEmptyTable,
			"sInfo": config.ImagesManager.sInfo,
			"sInfoEmpty": config.ImagesManager.sInfoEmpty,
			"sInfoFiltered": config.ImagesManager.sInfoFiltered,
			"sSearch" : config.ImagesManager.sSearch,

			"oPaginate": {
			"sFirst":    config.ImagesManager.sFirst,
			"sPrevious": config.ImagesManager.sPrevious,
			"sNext":     config.ImagesManager.sNext,
			"sLast":     config.ImagesManager.sLast
				}
			},

		"bProcessing": true,
		"bServerSide": true,
		"sAjaxSource": "getdata",
		"aLengthMenu" : [[10,20,50,100, -1],[10,20,50,100,"All"]],
		"fnServerData": function ( sSource, aoData, fnCallback ) {
			// add filter template selection
			aoData.push( { "name" : "filter_category", "value" : filter_category  } );
		    $.ajax( {
                "dataType": 'json',
                "type": "GET",
                "url": sSource,
                "data": aoData,
				"success": fnCallback
            } );
		 },
		"aoColumns": [
		            { "bSortable": true },
		            { "bSortable": false },
		            { "bSortable": true },
		            { "bSortable": true },
		            { "bSortable": false },
		  			{ "bSortable": false },
					// { "bSortable": true },
					{ "bSortable": false }
		        ]
		});

	$('body').ajaxStop( function(){

	});



	$(".dataTable").delegate('a.edit-modal',"click", function(e){
		e.preventDefault();
		$.fancybox({
			'type': 'iframe',
			'href' : $(this).attr('href'),
			'autoScale' : false,
			'width' : "90%",
			'height' : "90%",
		    'afterClose' : function(){
		    	var args = window.location.search ? window.location.search : '';
		    	document.location.href = "./" + args;
		    }
		});

	});


});