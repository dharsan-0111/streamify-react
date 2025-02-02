import type React from "react"
import { formatNumber } from "../helpers/helpers"
import { metricsData } from "../dataset"
import { BadgeDollarSign, LucideMusic, User, UserCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { motion } from "framer-motion"

const Metrics: React.FC = (): React.JSX.Element => {
  const metricCardsData = [
    {
      name: "Total Users",
      value: formatNumber(metricsData?.totalUsers),
      icon: User,
      cardClass: "bg-gradient-to-r from-blue-500 to-blue-700 text-white",
    },
    {
      name: "Active Users",
      value: formatNumber(metricsData?.activeUsers),
      icon: UserCheck,
      cardClass: "bg-gradient-to-r from-green-500 to-green-700 text-white",
    },
    {
      name: "Total Streams",
      value: formatNumber(metricsData?.totalStreams),
      icon: LucideMusic,
      cardClass: "bg-gradient-to-r from-purple-500 to-purple-700 text-white",
    },
    {
      name: "Revenue",
      value: `$${formatNumber(metricsData?.revenue)}`,
      icon: BadgeDollarSign,
      cardClass: "bg-gradient-to-r from-yellow-500 to-yellow-700 text-white",
    },
    {
      name: "Top Artist",
      value: metricsData?.topArtist,
      icon: LucideMusic,
      cardClass: "bg-gradient-to-r from-pink-500 to-pink-700 text-white",
    },
  ]

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {metricCardsData?.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderRadius: "1rem",
              }}
              whileTap={{ scale: 0.98 }}
              className="h-full"
            >
              <Card className={`${metric?.cardClass}`}>
                <CardHeader className="flex justify-between">
                  <CardTitle className="text-2xl font-bold">{metric?.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center w-full">
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                      {metric?.icon && <metric.icon className="w-6 h-6" />}
                    </motion.div>
                    <span className="text-3xl font-bold whitespace-nowrap text-ellipsis">{metric?.value}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Metrics

