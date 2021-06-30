function dev(e, i, f, g) {

    $(document).ready(function() {
        e.click(function() {
            e.toggle(1000);
            i.toggle(1000);
        });
        i.click(function() {
            e.toggle(1000);
            i.toggle(1000);
        });
        f.click(function() {
            f.toggle();
            g.toggle(1000);
        });
        g.click(function() {
            f.toggle(1000);
            g.toggle(1000);
        })
    });
}
dev($("#eastA"), $("#image1"));
dev($(".kenyat"), $("#image2"))