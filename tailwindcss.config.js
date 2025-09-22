export default {
    content: ["./src/*/.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            colors: {
                primary: "#ff5061",
                secondary: "#0a0701",
                accent: "#f4f4f9",
                text: "#ffffff",
            },
            backgroundImage: {
                "hero-gradient":
                    "linear-gradient(135deg, #0f172a 0%, #1e3a8a 35%, #4cc9f0 100%)",
                "hero-radial":
                    "radial-gradient(circle at 30% 30%, #4cc9f0 0%, transparent 60%), radial-gradient(circle at 70% 70%, #a855f7 0%, transparent 60%)",
            },
        },
    },
    plugins: [
        // any tailwind plugins if needed
    ],
};
