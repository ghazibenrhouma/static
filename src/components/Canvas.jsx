import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Canvas = ({ color, handle }) => {
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x999999);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    );
    scene.add(camera);

    camera.position.z = 3;

    const canvas = document.querySelector(".webgl");

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    const light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 4, 5);
    scene.add(light);

    const light1 = new THREE.DirectionalLight(0xffffff);
    light1.position.set(0, 4, -5);
    scene.add(light1);

    const bodyMaterial = new THREE.MeshPhongMaterial({
      color: color,
      shininess: 10,
    });

    const loader = new GLTFLoader();
    loader.load(
      "Door.glb",
      function (glb) {
        const root = glb.scene;
        console.log(root);

        root.traverse((child) => {
          if (child.isMesh) {
            const m = child;
            m.receiveShadow = true;
            m.castShadow = true;
          }
          child.traverse((c) => {
            if (c.isMesh && child.name === "Door1") {
              c.material = bodyMaterial;
            }
          });
        });
        console.log(root.getObjectByName("Door1HandleInside"));
        root.getObjectByName("Door1HandleInside").removeFromParent();
        root.getObjectByName("Door1HandleOutside").removeFromParent();
        scene.add(root);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function (error) {
        console.log("AN error occurred !");
      }
    );

    function loadHandle() {
      const Loader = new GLTFLoader();

      Loader.loadAsync("poignee_portes.glb").then((glb) => {
        const Handle = glb.scene;

        console.log(glb.scene);

        const obj = Handle.getObjectByName(handle);

        obj.rotateZ(3.142);
        obj.position.x = -0.3280859887599945;
        obj.position.y = 0.937969982624054;
        obj.position.z = 0.0364999994635582;

        switch (handle) {
          case "BT11":
            obj.rotateZ(3.142);
            obj.position.x = -0.3280859887599945;
            obj.position.y = 1.6;
            obj.position.z = 0.0364999994635582;
            break;
          case "BT13001":
            obj.rotateZ(3.142);
            obj.position.x = -0.3280859887599945;
            obj.position.y = 1.88;
            obj.position.z = 0.0364999994635582;

            break;
          case "BT14001":
            obj.rotateZ(3.142);
            obj.position.x = -0.3280859887599945;
            obj.position.y = 1.88;
            obj.position.z = 0.0364999994635582;
            break;
          case "BT15001":
            obj.rotateZ(3.142);
            obj.position.x = -0.3280859887599945;
            obj.position.y = 2.02;
            obj.position.z = 0.0364999994635582;
            break;
          case "BT7001":
            obj.rotateZ(3.142);
            obj.position.x = -0.3280859887599945;
            obj.position.y = 1.5;
            obj.position.z = 0.0364999994635582;
            break;
          case "BT8001":
            obj.rotateZ(3.142);
            obj.position.x = -0.3280859887599945;
            obj.position.y = 1.5;
            obj.position.z = 0.0364999994635582;
            break;
          case "BT13-bis":
            obj.rotateZ(3.142);
            obj.position.x = -0.3280859887599945;
            obj.position.y = 1.78;
            obj.position.z = 0.0364999994635582;
            break;

          default:
            break;
        }

        scene.add(obj);
      });
    }

    function loadHandle1() {
      const Loader = new GLTFLoader();

      Loader.loadAsync("poignee_portes.glb").then((glb) => {
        const Handle = glb.scene;

        console.log(glb.scene);

        const obj = Handle.getObjectByName(handle);
        obj.rotateY(3.142);
        obj.position.x = -0.3280859887599945;
        obj.position.y = 0.937969982624054;
        obj.position.z = -0.0364999994635582;

        switch (handle) {
          case "BT11":
            obj.rotateZ(3.142);
            obj.position.x = -0.28;
            obj.position.y = 0.7;
            obj.position.z = -0.0364999994635582;
            break;
          case "BT13001":
            obj.rotateZ(3.142);
            obj.position.x = -0.3280859887599945;
            obj.position.y = 0.18;
            obj.position.z = -0.0364999994635582;

            break;
          case "BT14001":
            obj.rotateZ(3.142);
            obj.position.x = -0.3280859887599945;
            obj.position.y = 0.38;
            obj.position.z = -0.0364999994635582;
            break;
          case "BT15001":
            obj.rotateZ(3.142);
            obj.position.x = -0.3280859887599945;
            obj.position.y = 0.058;
            obj.position.z = -0.0364999994635582;
            break;
          case "BT7001":
            obj.rotateZ(3.142);
            obj.position.x = -0.28;
            obj.position.y = 0.7;
            obj.position.z = -0.0364999994635582;
            break;
          case "BT8001":
            obj.rotateZ(3.142);
            obj.position.x = -0.29;
            obj.position.y = 0.7;
            obj.position.z = -0.0364999994635582;
            break;
          case "BT13-bis":
            obj.rotateZ(3.142);
            obj.position.x = -0.3280859887599945;
            obj.position.y = 0.3;
            obj.position.z = -0.0364999994635582;
            break;

          default:
            break;
        }
        console.log(handle);
        scene.add(obj);
      });
    }

    const controls = new OrbitControls(camera, renderer.domElement);

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
    loadHandle();
    loadHandle1();
  }, [color, handle]);
  return (
    <div>
      <canvas className="webgl"></canvas>
    </div>
  );
};

export default Canvas;
