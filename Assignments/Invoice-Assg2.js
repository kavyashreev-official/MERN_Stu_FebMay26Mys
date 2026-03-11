// Build a Compact Invoice Using Rest + Default
function invoice(gstRate = 0.18, ...items) {

    let subtotal = 0;

    for (let item of items) {

        if (item.name === "STOP") {
            break;
        }

        if (!item.price || !item.qty || item.price <= 0 || item.qty <= 0) {
            continue;
        }

        subtotal += item.price * item.qty;
    }

    let gst = subtotal * gstRate;
    let total = subtotal + gst;

    return {
        subtotal: subtotal,
        gst: gst,
        total: total
    };
}