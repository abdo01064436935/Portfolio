 let navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 675) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        
      } else {
        navbar.style.backgroundColor = "transparent";
      }
    });


    const skills = document.querySelectorAll('.skill-per');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      // علشان متشتغلش كل مرة، بنوقف المراقبة بعد أول تشغيل
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 }); // 30% من العنصر لازم يكون ظاهر علشان يشتغل

skills.forEach(skill => observer.observe(skill));



document.querySelector('.b2').addEventListener('click', function(e) {
  e.preventDefault(); // علشان يمنع أي تصرف افتراضي
  document.querySelector('#contact').scrollIntoView({
    behavior: 'smooth'  // يخلي الحركة ناعمة
  });
});

 

    // نجيب كل الأيقونات
  const openBtns = document.querySelectorAll(".fa-search-plus");

  // نمر عليهم واحد واحد
  openBtns.forEach(btn => {
    const modal = btn.parentElement.querySelector(".modal"); // المودال اللي جوه نفس الـ div
    const closeBtn = modal.querySelector(".close");

    // عند الضغط على الأيقونة → افتح المودال
    btn.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    // عند الضغط على X → اغلق المودال
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // عند الضغط برة المودال → اغلقه
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });




// Navbar functionality
const navBtns = document.querySelectorAll(".nav-btn");
const contents = document.querySelectorAll(".skills-content");

navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active from all buttons
    navBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Show correct content
    const target = btn.getAttribute("data-target");
    contents.forEach((c) => {
      if (c.id === target) {
        c.classList.add("active");
        // animate skills inside
        const cards = c.querySelectorAll(".skill-card");
        cards.forEach((card, i) => {
          setTimeout(() => card.classList.add("show"), i * 150);
          const bar = card.querySelector(".progress-bar span");
          bar.style.width = card.dataset.skill + "%";
        });
      } else {
        c.classList.remove("active");
        const bars = c.querySelectorAll(".progress-bar span");
        bars.forEach((b) => (b.style.width = "0"));
      }
    });
  });
});

// Default load animation for first tab
window.addEventListener("load", () => {
  document.querySelectorAll(".skills-content.active .skill-card").forEach((card, i) => {
    setTimeout(() => card.classList.add("show"), i * 150);
    const bar = card.querySelector(".progress-bar span");
    bar.style.width = card.dataset.skill + "%";
  });
});




  // تهيئة EmailJS
  emailjs.init("ovKGT3nxmZMKrmBdl"); // ← استبدلها بمفتاحك من EmailJS

  // عند إرسال الفورم
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // بيانات الفورم
    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    // إرسال الإيميل
    emailjs.send("service_2edbxjr", "template_hbg4zkn", params)
      .then(function() {
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("contactForm").reset();
      }, function(error) {
        alert("حدث خطأ أثناء الإرسال، حاول مرة أخرى");
        console.error(error);
      });
  });

