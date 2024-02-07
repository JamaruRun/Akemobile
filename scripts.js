// สร้างฟังก์ชันเพิ่มสินค้าในตะกร้า
function addToCart(productName, price) {
    // ตรวจสอบว่ามีตะกร้าสินค้าใน localStorage หรือไม่
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    // เพิ่มสินค้าลงในตะกร้า
    const productToAdd = {
        id: Math.floor(Math.random() * 1000), // สร้าง id สินค้าแบบสุ่ม
        name: productName,
        price: price,
        quantity: 1
    };
    cart.push(productToAdd);

    // บันทึกข้อมูลตะกร้าสินค้าใหม่ลงใน localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // แสดงข้อความเตือนหลังจากเพิ่มสินค้าลงในตะกร้า
    alert('เพิ่มสินค้าลงในตะกร้าเรียบร้อยแล้ว!');
}

// เมื่อเอกสาร HTML โหลดเสร็จ
document.addEventListener('DOMContentLoaded', function() {
    // เลือกปุ่ม "สินค้า" จากเมนู
    const productButton = document.querySelector('nav ul li:nth-child(2) a');

    // เพิ่มการฟังก์ชันเมื่อคลิกที่ปุ่ม "สินค้า"
    productButton.addEventListener('click', function(event) {
        event.preventDefault(); // ป้องกันการโหลดหน้าใหม่เมื่อคลิกที่ลิงค์

        // เปิดหน้า products.html ในหน้าปัจจุบัน
        window.location.href = 'products.html';
    });
});
