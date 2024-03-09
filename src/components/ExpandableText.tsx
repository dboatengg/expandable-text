import { useState } from 'react';

interface Props {
  children: string;
  textLength?: number;
}

const ExpendableText = ({ children, textLength = 100 }: Props) => {
  const handleClick = () => {
    SetExpanded(!isExpanded);
  };

  const [isExpanded, SetExpanded] = useState(false);

  if (children.length <= textLength) return <p>{children}</p>;

  const summarisedText = isExpanded
    ? children
    : children.substring(0, textLength);
  return (
    <p>
      {summarisedText}...
      <button onClick={handleClick}>{isExpanded ? 'Less' : 'More'}</button>
    </p>
  );
};

export default ExpendableText;
