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
