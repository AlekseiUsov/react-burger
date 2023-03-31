export const convertStatus = (status: string) => {
    let translatedStatus;

    if (status === 'done') {
        translatedStatus = 'Выполнен'
    } else if (status === 'pending') {
        translatedStatus = 'Готовится'
    } else if (status === 'created') {
        translatedStatus = 'Создан'
    }

    return translatedStatus;
}