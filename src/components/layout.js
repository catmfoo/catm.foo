import React from "react";

export default function Layout({ children, location }) {
  const links = [
    { title: "catm.foo", href: "/" },
    { title: "writing", href: "/writing/" },
    { title: "photos", href: "/photos/" },
    { title: "about", href: "/about/" },
  ];

  return (
    <div style={{ margin: "0 auto", maxWidth: "500px", padding: "0 1rem" }}>
      <nav style={{ margin: "2rem 0" }}>
        <ul style={{ margin: 0, padding: 0, listStyleType: "none" }}>
          {links.map((link) => {
            return (
              <li
                style={{ display: "inline", paddingRight: "10px" }}
                key={link.href}
              >
                <a
                  href={link.href}
                  className={
                    location.pathname === link.href ? "no-line" : undefined
                  }
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div style={{ display: "flex", marginTop: "8px" }}>
          {["#F9F7F7", "#DBE2EF", "#3F72AF", "#112D4E"].map((color) => {
            return (
              <span
                style={{
                  backgroundColor: color,
                  width: "32px",
                  height: "24px",
                }}
              ></span>
            );
          })}
        </div>
      </nav>
      {children}
    </div>
  );
}
