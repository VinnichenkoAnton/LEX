function request() {
    const req = document.querySelector('#request'),
        btn = document.querySelector('.mainscreen__header .btn'),
        wrapper = document.querySelector('.site__wrapper'),
        ret = document.querySelector('.request__return');

    btn.addEventListener('click', function() {
        wrapper.style.display = 'none';
        req.style.display = 'block';
        $(".request__agreement").getNiceScroll().resize();
    });

    ret.addEventListener('click', function() {
        wrapper.style.display = 'block';
        req.style.display = 'none';
        $(".request__agreement").getNiceScroll().resize();
    });

}

export default request;