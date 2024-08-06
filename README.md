# React Modal SarahVar

**react-modal-sarahvar** est un composant modal simple et flexible pour React. Ce composant permet de créer des fenêtres modales élégantes et fonctionnelles dans vos projets React.

## Table des matières
- Prérequis
- Compatibilité
- [Utilisation](#utilisation)
- [Props](#props)
- [Personnalisation du Style](#personnalisation-du-style)

## Prérequis 

Pour utiliser react-modal-sarahvar, vous devez avoir Node.js installé sur votre système. La version minimale requise est Node.js version 12.x ou supérieure.

## Compatibilité de Node.js

react-modal-sarahvar a été développé et testé avec Node.js version 20. Bien qu'il devrait fonctionner correctement avec les versions compatibles, la compatibilité avec d'autres versions de Node.js n'a pas été formellement testée.

## Utilisation

Pour utiliser **react-modal-sarahvar** dans votre projet React, suivez ces étapes :

1. **Installez le composant avec npm ou yarn :**

    ```bash
    npm install react-modal-sarahvar
    # ou
    yarn add react-modal-sarahvar
    ```

2. **Importez le composant et les styles dans votre application :**

    ```jsx
    import React, { useState } from 'react';
    import Modal from 'react-modal-sarahvar';
    import 'react-modal-sarahvar/dist/index.css'; // Importez le CSS par défaut si nécessaire
    ```

3. **Utilisez le composant Modal dans votre code :**

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

Le composant `Modal` accepte les props suivantes :

- **`isOpen`** (`bool`) : Indique si le modal est ouvert (`true`) ou fermé (`false`). Il est nécessaire pour contrôler l'affichage du modal.
- **`onClose`** (`function`) : Fonction à appeler lorsque l'utilisateur souhaite fermer le modal. Typiquement, cette fonction change l'état `isOpen` à `false`.
- **`children`** (`node`) : Contenu à afficher à l'intérieur du modal. Vous pouvez y inclure des éléments JSX tels que du texte, des images, des boutons, etc.

### Exemple d'utilisation des props

```jsx
<Modal
  isOpen={true}
  onClose={() => console.log('Modal closed')}>
  <h2>Welcome</h2>
  <p>This is a modal dialog.</p>
  <button onClick={() => console.log('Button clicked')}>Click Me</button>
</Modal>

