export default function ratingColorizer(rating: number): string {
    if (rating >= 4.0) {
        return "green-500";
    } else if (rating >= 3.0) {
        return "yellow-500";
    } else {
        return "red-500";
    }
}
