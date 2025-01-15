/* SET CURRENT YEAR IN COPYRIGHT */
const yearEl = (document.querySelector(".year").textContent =
  new Date().getFullYear());

/* MOBILE NAVIGATION */
const bntNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

bntNav.addEventListener("click", (e) => {
  e.preventDefault();
  // e.target.closest("button");
  headerEl.classList.toggle("nav-open");
});
///////////////////////////////////////////////////////////
// Smooth scrolling animation
const linksEls = document.querySelectorAll("a:link");

Array.from(linksEls).forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");
    const a = e.target.closest("a");
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (a.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }

    if (href !== "#" && href.startsWith("#")) {
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
      return;
    }
  });
});

///////////////////////////////////////////////////////////
// Sticky Navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.toggle("sticky", true);
      return;
    }

    if (ent.isIntersecting) {
      document.body.classList.toggle("sticky", false);
      return;
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-59px",
  }
);

obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

function test() {
  console.log("netlify");
}

test();
