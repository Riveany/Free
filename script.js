document.addEventListener('DOMContentLoaded', function () {
    const fadeElements = document.querySelectorAll('.fade-in');

    // ทำให้ body ค่อยๆ ปรากฏ
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.opacity = 1; // ทำให้ body ค่อยๆ ปรากฏ
        fadeElements.forEach(el => {
            el.classList.add('visible'); // ทำให้เนื้อหาปรากฏ
        });
    }, 100); // หน่วงเวลาเล็กน้อย

    function checkFade() {
        const triggerBottom = window.innerHeight / 5 * 4;

        fadeElements.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                el.classList.add('visible'); // ทำให้เนื้อหาปรากฏขึ้น
            } else {
                el.classList.remove('visible'); // ซ่อนเนื้อหาหากอยู่ด้านล่าง
            }
        });
    }




    
    window.addEventListener('scroll', checkFade);
    window.addEventListener('resize', checkFade);
    checkFade(); // ตรวจสอบการแสดงผลเมื่อโหลดหน้า
});

// script.js

document.addEventListener("DOMContentLoaded", function() {
    // เพิ่มการทำงานของ fade-in เมื่อโหลดหน้า
    document.body.classList.add('fade-in');
});

// เพิ่ม event listener สำหรับลิงค์ที่มีการเปลี่ยนหน้า
const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // หยุดการทำงานปกติของลิงค์
        const targetUrl = this.getAttribute('href');

        // เริ่มการ fade-out
        document.body.classList.remove('fade-in');
        document.body.classList.add('fade-out');

        // รอให้การ fade-out เสร็จสิ้นก่อนที่จะเปลี่ยนหน้า
        setTimeout(() => {
            window.location.href = targetUrl; // เปลี่ยนหน้า
        }, 500); // ค่าตรงกับเวลาใน CSS transition
    });
});

// script.js

window.addEventListener('DOMContentLoaded', (event) => {
    // ค้นหาองค์ประกอบที่มีคลาส fade-in
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // เพิ่มคลาส show ให้กับแต่ละองค์ประกอบ
    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show'); // เพิ่มคลาส show เพื่อให้แสดงผล
        }, index * 300); // ทำให้แต่ละองค์ประกอบโผล่ขึ้นมาทีละ 300ms
    });
});

function searchServices() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const services = document.querySelectorAll('.service');

    services.forEach(service => {
        const title = service.querySelector('.card-title').textContent.toLowerCase();
        const text = service.querySelector('.card-text').textContent.toLowerCase();
        
        if (title.includes(filter) || text.includes(filter)) {
            service.style.display = "";
        } else {
            service.style.display = "none";
        }
    });
}

function addToCart(productName, productPrice) {
    // สร้างวัตถุสินค้า
    const product = {
        name: productName,
        price: productPrice
    };

    // ดึงข้อมูลสินค้าที่มีอยู่ในตะกร้า
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // เพิ่มสินค้าใหม่ไปยังตะกร้า
    cart.push(product);

    // บันทึกข้อมูลตะกร้าใหม่ใน localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // แสดงข้อความยืนยันการเพิ่มสินค้า
    alert(productName + ' ถูกเพิ่มลงตะกร้าแล้ว!');
}
