﻿namespace api.models
{
	public class Service
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public double Cost { get; set; }
		public string Description { get; set; }
		public int CategoryId { get; set; }
		public Category Category { get; set; }
	}
}