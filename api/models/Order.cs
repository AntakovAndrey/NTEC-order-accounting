namespace api.models
{
	public class Order
	{
		public int Id { get; set; }
		public DateTime OrderDate { get; set; }
		public int CustomerId { get; set; }
		public int StatusId { get; set; }
	}
}
