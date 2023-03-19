export const convertData = (data: string) => {
    const current = new Date(data);

    const dayOfOffer = current.getDate();
    const today = (new Date()).getDate();
    let day;

    if (dayOfOffer === today) {
        day = 'Сегодня'
    } else if (today - dayOfOffer === 1) {
        day = 'Вчера'
    } else if (today - dayOfOffer > 1) {
        const difference = today - dayOfOffer
        day = `${difference} дней назад`
    }

    const hours = current.getHours();
    const minutes = current.getMinutes()
    const formatedMinutes = minutes < 10 ? `0${minutes}` : minutes

    return `${day}, ${hours}:${formatedMinutes}`
}