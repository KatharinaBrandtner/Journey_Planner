// Katharina Brandtner 

export interface ButtonProps {
    text: string; 
    type?: 'button' | 'submit';
    variant?: 'btn-white' | 'btn-dark';
    onClick?: () => void; 
  }