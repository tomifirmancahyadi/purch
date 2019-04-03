/**
 * @author Kishor Mali
 */


jQuery(document).ready(function(){

    jQuery(document).on("click", ".deleteBarang", function(){

        var barangId = $(this).data("barangid"),
            hitURL = baseURL + "deleteBarang",
            currentRow = $(this);

        var confirmation = confirm("Anda Yakin untuk menghapus barang?");

        if(confirmation)
        {
            jQuery.ajax({
                type : "POST",
                dataType : "json",
                url : hitURL,
                data : { barangId : barangId }
            }).done(function(data){
                console.log(data);
                currentRow.parents('tr').remove();
                if(data.status = true) { alert("Barang Berhasil dihapus"); }
                else if(data.status = false) { alert("Barang  Gagal dihapus"); }
                else { alert("Access denied..!"); }
            });
        }
    });


    jQuery(document).on("click", ".searchList", function(){

    });

});
