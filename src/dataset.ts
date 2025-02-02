export const metricsData = {
    totalUsers: 2456789,
    activeUsers: 1234567,
    totalStreams: 45678901,
    revenue: 3456789,
    topArtist: "Taylor Swift",
  }
  
  export const userGrowthData = [
    { month: "Jan", totalUsers: 2000000, activeUsers: 1000000 },
    { month: "Feb", totalUsers: 2100000, activeUsers: 1100000 },
    { month: "Mar", totalUsers: 2200000, activeUsers: 1150000 },
    { month: "Apr", totalUsers: 2300000, activeUsers: 1200000 },
    { month: "May", totalUsers: 2350000, activeUsers: 1220000 },
    { month: "Jun", totalUsers: 2400000, activeUsers: 1230000 },
    { month: "Jul", totalUsers: 2420000, activeUsers: 1240000 },
    { month: "Aug", totalUsers: 2440000, activeUsers: 1245000 },
    { month: "Sep", totalUsers: 2450000, activeUsers: 1250000 },
    { month: "Oct", totalUsers: 2455000, activeUsers: 1255000 },
    { month: "Nov", totalUsers: 2456000, activeUsers: 1260000 },
    { month: "Dec", totalUsers: 2456789, activeUsers: 1234567 },
  ]
  
  export const revenueData = [
    { type: "Subscriptions", value: 2789012 },
    { type: "Advertisements", value: 567890 },
    { type: "Merchandise", value: 99887 },
  ]
  
  export const topSongsData = [
    { name: "Anti-Hero", artist: "Taylor Swift", streams: 1234567 },
    { name: "Cruel Summer", artist: "Taylor Swift", streams: 1123456 },
    { name: "Last Night", artist: "Morgan Wallen", streams: 1023456 },
    { name: "Flowers", artist: "Miley Cyrus", streams: 987654 },
    { name: "Rich Flex", artist: "Drake", streams: 876543 },
  ]
  
  export const recentStreamsData = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    songName: topSongsData[Math.floor(Math.random() * 5)].name,
    artist: topSongsData[Math.floor(Math.random() * 5)].artist,
    dateStreamed: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
    streamCount: Math.floor(Math.random() * 1000000) + 100000,
    userId: `USER${Math.floor(Math.random() * 1000000)}`,
    revenueSource: revenueData[Math.floor(Math.random() * 3)].type,
  }))