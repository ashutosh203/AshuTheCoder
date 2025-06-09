// src/components/ParticlesComponent.jsx
import { useEffect } from "react";
// Import your particles.js configuration

const ParticlesComponent = () => {
  useEffect(() => {
    // particles.js ko initialize karo jab component mount ho
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        autoPlay: true,
        background: {
          color: { value: "transparent" },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        fpsLimit: 60,
        detectRetina: true,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "trail",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            trail: {
              delay: 0.005,
              pauseOnStop: true,
              quantity: 6,
              particles: {
                color: {
                  value: ["#ff00ff", "#00ffff", "#ff9900"],
                  animation: {
                    enable: true,
                    speed: 300,
                    sync: false,
                  },
                },
                move: {
                  speed: 2,
                  outModes: {
                    default: "destroy",
                  },
                },
                size: {
                  value: { min: 2, max: 6 },
                  animation: {
                    enable: true,
                    speed: 15,
                    sync: true,
                    startValue: "min",
                    destroy: "max",
                  },
                },
                links: { enable: false },
              },
            },
            push: {
              quantity: 6,
            },
          },
        },
        particles: {
          number: {
            value: 0, // 👇 Controlled by emitter
          },
          color: {
            value: ["#ff00ff", "#00ffff", "#ffff00", "#00ff00"],
            animation: {
              enable: true,
              speed: 40,
              sync: false,
            },
          },
          shape: {
            type: ["circle", "star"],
            options: {
              star: {
                sides: 5,
              },
            },
          },
          opacity: {
            value: 0.8,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.3,
              sync: false,
            },
          },
          size: {
            value: { min: 2, max: 5 },
            animation: {
              enable: true,
              speed: 15,
              startValue: "min",
              destroy: "max",
            },
          },
          links: {
            enable: true,
            distance: 120,
            color: "random",
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: {
              default: "destroy",
            },
          },
          rotate: {
            value: { min: 0, max: 360 },
            animation: {
              enable: true,
              speed: 10,
              sync: false,
            },
            direction: "random",
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.1,
              opacity: 1,
            },
          },
          life: {
            duration: {
              sync: false,
              value: 3,
            },
          },
        },
        emitters: {
          direction: "none",
          life: {
            count: 0,
            delay: 0,
          },
          rate: {
            quantity: 3,
            delay: 0.5,
          },
          size: {
            width: 100,
            height: 100,
          },
          position: {
            x: 50,
            y: 50,
          },
        },
      });
    }
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        zIndex: 0,
        // background:
        //   "linear-gradient(130deg, rgba(34, 1, 83, 1) 44%, rgba(108, 0, 101, 1) 74%)",
        // backgroundColor: "black", // Background color for visibility
      }}
    ></div>
  );
};

export default ParticlesComponent;
