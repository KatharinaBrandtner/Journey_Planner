// Katharina Brandtner 

export interface InputGroupProps {
    text: string; 
    type: 'text' | 'date' | 'textarea' | 'guide';
    date?: 'start' | 'end';
    required?: 'required';
}