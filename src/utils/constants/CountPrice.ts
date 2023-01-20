
export const WorkInitialPrices = {
    type: 8000,
    size: 12000,
    branding: 20000
};

export const WorkTypes = [
    { value: 'min', label: 'Минимальный', coefficient: 1 },
    { value: 'sh', label: 'Шаблонный', coefficient: 2 },
    { value: 'uniq', label: 'Уникальный', coefficient: 2.5 },
];

export const WorkSizes = [
    { value: 'one', label: 'Одностраничный', coefficient: 1 },
    { value: 'two', label: 'Двухстраничный', coefficient: 1.75 },
    { value: 'three', label: 'Трехстраничный', coefficient: 2 },
];