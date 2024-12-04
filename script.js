// ����� ����� ��� ����� ��� �� "���� �����"
document.querySelectorAll('.game-link').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();  // ��� ����� ����� ������
        alert('�� ����� �� ������!');  // ����� �������
    });
});

// ����� ����� ��� ������� ��� �������
document.querySelectorAll('.game-link').forEach(item => {
    item.addEventListener('mouseenter', function() {
        item.style.backgroundColor = '#ffca28';  // ����� ����� ��� ������
    });

    item.addEventListener('mouseleave', function() {
        item.style.backgroundColor = '#00bcd4';  // ������� ����� ������
    });
});
