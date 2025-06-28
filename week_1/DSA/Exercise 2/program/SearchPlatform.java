public class SearchPlatform {

    public static int linearSearch(Product[] products, String target) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productName.equalsIgnoreCase(target)) {
                return i;
            }
        }
        return -1;
    }

    public static int binarySearch(Product[] products, String target) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(target);
            if (cmp == 0) return mid;
            if (cmp < 0) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        Product[] productList = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shirt", "Clothing"),
            new Product(3, "Book", "Education"),
            new Product(4, "Phone", "Electronics")
        };

        int index1 = linearSearch(productList, "Phone");
        System.out.println("Linear Search Found at: " + index1);

        Product[] sortedList = {
            new Product(3, "Book", "Education"),
            new Product(1, "Laptop", "Electronics"),
            new Product(4, "Phone", "Electronics"),
            new Product(2, "Shirt", "Clothing")
        };

        int index2 = binarySearch(sortedList, "Phone");
        System.out.println("Binary Search Found at: " + index2);
    }
}
