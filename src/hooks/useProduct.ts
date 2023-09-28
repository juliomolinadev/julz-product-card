import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs, InitialValues } from "../interfaces/interfaces";

interface useProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
	const [counter, setCounter] = useState<number>(initialValues?.count || value);
	const isMounted = useRef(false);

	const increaseBy = (value: number): void => {
		const newValue = Math.max(counter + value, 0);

		if (initialValues?.maxCount && newValue > initialValues?.maxCount) return;

		setCounter(newValue);

		onChange && onChange({ count: newValue, product });
	};

	const reset = (): void => {
		setCounter(initialValues?.count || value);
	};

	useEffect(() => {
		if (!isMounted.current) return;
		setCounter(initialValues?.count || value);
	}, [value, initialValues]);

	useEffect(() => {
		isMounted.current = true;
	}, []);

	return {
		counter,
		increaseBy,
		reset,
		maxCount: initialValues?.maxCount,
		isMaxCountReached: counter === initialValues?.maxCount,
	};
};
