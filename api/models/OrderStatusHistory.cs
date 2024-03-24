namespace api.models
{
	public class OrderStatusHistory
	{
		public int Id { get; set; }
		public int OrderId { get; set; }
		public int StatusId { get; set; }
		public DateTime ChangeDate { get; set; }
	}
}
