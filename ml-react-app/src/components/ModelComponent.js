// import React, { useEffect, useState } from 'react';
// import * as tf from '@tensorflow/tfjs';

// function ModelComponent() {
//   const [model, setModel] = useState(null);

//   useEffect(() => {
//     async function loadModel() {
//       // Load your pre-trained model
//       const loadedModel = await tf.loadLayersModel('D:/University/SemesterVII/ET_401/ET_Projects/Project_4/ml-react-app/src/model/model.json');
//       setModel(loadedModel);
//     }

//     loadModel();

//     // Cleanup when unmounting
//     return () => {
//       if (model) {
//         model.dispose();
//       }
//     };
//   }, []);

//   const predict = async (inputData) => {
//     if (model) {
//       const inputTensor = tf.tensor(inputData);
//       const output = model.predict(inputTensor);
//       const result = output.arraySync(); // Convert output to a JavaScript array
//       return result;
//     } else {
//       return null;
//     }
//   };

//   return (
//     <div>
//       <h2>Machine Learning Model</h2>
//       {model ? (
//         <button onClick={async () => {
//           const inputData = [1, 2, 3]; // Provide input data
//           const prediction = await predict(inputData);
//           console.log('Model Prediction:', prediction);
//         }}>Predict</button>
//       ) : (
//         <p>Loading model...</p>
//       )}
//     </div>
//   );
// }

// export default ModelComponent;

import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';

function ModelComponent() {
  const [model, setModel] = useState(null);

  useEffect(() => {
    async function loadModel() {
      try {
        // Load your pre-trained model
        // const loadedModel = await tf.loadLayersModel('ml-react-app/src/components/model.json');
        const loadedModel = await tf.loadLayersModel('./model.json');
        setModel(loadedModel);
      } catch (error) {
        console.error('Error loading the model:', error);
      }
    }

    loadModel();

    // Cleanup when unmounting
    return () => {
      if (model) {
        model.dispose();
      }
    };
  }, []);

  const predict = async (inputData) => {
    if (model) {
      const inputTensor = tf.tensor(inputData);
      const output = model.predict(inputTensor);
      const result = output.arraySync(); // Convert output to a JavaScript array
      return result;
    } else {
      return null;
    }
  };

  return (
    <div>
      <h2>Machine Learning Model</h2>
      {model ? (
        <button onClick={async () => {
          const inputData = [1, 2, 3]; // Provide input data
          const prediction = await predict(inputData);
          console.log('Model Prediction:', prediction);
        }}>Predict</button>
      ) : (
        <p>Loading model...</p>
      )}
    </div>
  );
}

export default ModelComponent;

