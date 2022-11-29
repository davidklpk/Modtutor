using System.ComponentModel.DataAnnotations;

public class MediaSite{
    [Key]public int MSID { get; set; }
    public string Username { get; set; }
    public int LiveViews { get; set; }
    public int OnDemandViews { get; set; }
    public int TotalViews { get; set; }
    public int PresentationsWatched { get; set; }
    public int TotalTimeWatched { get; set; }
    public DateTime FirstWatched { get; set; }
    public DateTime LastWatched { get; set; }
}