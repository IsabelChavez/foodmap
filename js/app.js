function begin() {
    $(function () {
        setTimeout(function () {
            window.location.href = 'views/view-one.html';
        }, 5000);
    });
};

$(document).ready(begin);