import { useState } from 'react';

export const FillerContent = () => {
  const [content, setContent] = useState<string[]>([]);

  const addContent = () => {
    setContent([...content, 'Voluptatem vero omnis quis nam quaerat. Atque asperiores error quasi velit et quae. Sapiente ut laborum in ad ullam. Autem aut maiores qui vel maxime. Nihil culpa est ex accusantium est et aut.',
    'Voluptatem vero omnis quis nam quaerat. Atque asperiores error quasi velit et quae. Sapiente ut laborum in ad ullam. Autem aut maiores qui vel maxime. Nihil culpa est ex accusantium est et aut.',
    'Voluptatem vero omnis quis nam quaerat. Atque asperiores error quasi velit et quae. Sapiente ut laborum in ad ullam. Autem aut maiores qui vel maxime. Nihil culpa est ex accusantium est et aut.']);
  }

  const removeContent = () => {
    const ContentRemove = content.slice(0, -1);
    setContent(ContentRemove);
  }

  return (
    <div style={{marginTop: 50}}>
        <div className='content'>
            {
              content.map(filler => (
                <p style={{fontSize: '1.5rem', margin: 2}}>{filler}</p>
              ))
            }
        </div>
        <div className='actions'>
            <button onClick={addContent} style={{ padding: 5, fontSize: '1.8rem', marginRight: 2}}>Add</button>
            <button onClick={removeContent} style={{ padding: 5, fontSize: '1.8rem', marginRight: 2}}>Remove</button>
        </div>
    </div>
  )
}