type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean;

interface ClassDictionary {
	[id: string]: any;
}

interface ClassArray extends Array<ClassValue> { }

declare const clsx: (...classes: ClassValue[]) => string;

export = clsx;

