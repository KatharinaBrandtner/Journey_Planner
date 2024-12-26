// Katharina Brandtner 

export interface InputGroupProps {
    text: string; 
    type: 'text' | 'date' | 'textarea' | 'guide' | 'number';
    date?: 'start' | 'end';
    required?: 'required';
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    valueinput?: string | number | any;
    name?: string;
}