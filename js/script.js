function dev(e, i) {

    $(document).ready(function() {
        e.click(function() {
            e.toggle();
            i.toggle(1000);
        });
        i.click(function() {
            e.toggle(1000);
            i.toggle(1000);
        });
    });
}
dev($("#eastA"), $("#image1"));