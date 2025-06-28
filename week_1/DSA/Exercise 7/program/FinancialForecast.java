public class FinancialForecast {

    public static double calculateFutureValue(double value, double rate, int year) {
        if (year == 0) return value;
        return calculateFutureValue(value * (1 + rate), rate, year - 1);
    }

    public static void main(String[] args) {
        double initialAmount = 10000;
        double growthRate = 0.06;
        int totalYears = 5;

        double result = calculateFutureValue(initialAmount, growthRate, totalYears);
        System.out.println("Future value after " + totalYears + " years: " + result);
    }
}
