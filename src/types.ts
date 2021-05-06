interface TodoFormProps {
	onSubmit: (todoNote:TodoNote) => void;
	edit: any; // TODO this should be an actual type
}

interface TodoNote {
	id: number;
	text: string;
}

export type { TodoNote, TodoFormProps };
