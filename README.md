# React Modal SarahVar

**react-modal-sarahvar** is a simple and flexible modal component for React. It allows you to create elegant and functional modal windows in your React projects.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Props](#props)
- [Style Customization](#style-customization)
- [Node.js Compatibility](#nodejs-compatibility)

## Prerequisites

To use **react-modal-sarahvar**, you will need to have Node.js installed on your system. The minimum required version is Node.js version 12.x or higher.

## Usage

To use **react-modal-sarahvar** in your React project, follow these steps:

1. **Install the component with npm or yarn:**

    ```bash
    npm install react-modal-sarahvar
    # or
    yarn add react-modal-sarahvar
    ```

2. **Import the component and styles into your application:**

    ```jsx
    import React, { useState } from 'react';
    import Modal from 'react-modal-sarahvar';
    import 'react-modal-sarahvar/dist/index.css'; // Import the default CSS if needed
    ```

3. **Use the Modal component in your code:**

    ```jsx
    const App = () => {
      const [isOpen, setIsOpen] = useState(false);

      const openModal = () => setIsOpen(true);
      const closeModal = () => setIsOpen(false);

      return (
        <div>
          <button onClick={openModal}>Open Modal</button>
          <Modal isOpen={isOpen} onClose={closeModal}>
            <h2>My Modal</h2>
            <p>This is the content of the modal.</p>
            <button onClick={closeModal}>Close</button>
          </Modal>
        </div>
      );
    };

    export default App;
    ```

## Props

The `Modal` component accepts the following props:

- **`isOpen`** (`bool`): Indicates whether the modal is open (`true`) or closed (`false`). This is necessary to control the visibility of the modal.
- **`onClose`** (`function`): Function to call when the user wants to close the modal. Typically, this function sets the `isOpen` state to `false`.
- **`children`** (`node`): Content to display inside the modal. You can include JSX elements such as text, images, buttons, etc.

### Example Usage of Props

```jsx
<Modal
  isOpen={true}
  onClose={() => console.log('Modal closed')}>
  <h2>Welcome</h2>
  <p>This is a modal dialog.</p>
  <button onClick={() => console.log('Button clicked')}>Click Me</button>
</Modal>

Style Customization

To customize the style of the modal component, you can override the CSS classes defined in react-modal-sarahvar/dist/index.css or use custom CSS classes. Here is an example of overriding styles:

css

/* styles.css */
.my-custom-modal {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 500px;
}

.my-custom-overlay {
  background-color: rgba(0, 0, 0, 0.5);
}

Then, apply these custom classes to the Modal component:

jsx

import React, { useState } from 'react';
import Modal from 'react-modal-sarahvar';
import 'react-modal-sarahvar/dist/index.css'; // Import the default CSS if needed
import './styles.css'; // Import your custom styles

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="my-custom-modal"
        overlayClassName="my-custom-overlay"
      >
        <h2>My Modal</h2>
        <p>This is the content of the modal.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default App;

Node.js Compatibility

react-modal-sarahvar has been developed and tested with Node.js version 20. While it should work correctly with compatible versions, compatibility with other versions of Node.js has not been formally tested.