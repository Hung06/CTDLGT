function array(a, k, x) {

    for (let i = a.length ; i > k; i--) {
        a[i] = a[i - 1];
    }

    a[k] = x;

    console.log(a.join(' '));
}