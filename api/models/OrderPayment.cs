namespace api.models
{
	public class OrderPayment
	{
		public int Id { get; set; }
		public int OrderId { get; set; }
		public DateTime PaymentDate { get; set; }
		public double Amount { get; set; }
		public int PaymentTypeId { get; set; }
	}
}
