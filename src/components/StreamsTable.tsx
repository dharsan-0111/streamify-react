import React from "react"
import { useDashboard } from "../contexts/DashboardContext"
import { motion } from "framer-motion"
import { Input } from "./ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { formatNumber } from "../helpers/helpers"


const StreamsTable = () => {
  const { filteredData, filterBy, setFilterBy } = useDashboard()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl glassmorphism p-6"
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-primary-text">Recent Streams</h3>
          <Input
            placeholder="Filter by song or artist..."
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            className="max-w-sm bg-primary-card/50 border-primary-accent/20 text-primary-text placeholder:text-primary-subtext"
          />
        </div>

        <div className="rounded-xl overflow-auto border border-primary-accent/20 max-h-96">
            <Table className="w-full border-collapse">
                <TableHeader className="bg-white sticky top-0 z-10 shadow-md">
                <TableRow className="hover:bg-primary-accent/5">
                    <TableHead className="text-primary-subtext bg-inherit">Song Name</TableHead>
                    <TableHead className="text-primary-subtext bg-inherit">Artist</TableHead>
                    <TableHead className="text-primary-subtext bg-inherit">Date Streamed</TableHead>
                    <TableHead className="text-primary-subtext bg-inherit">Stream Count</TableHead>
                    <TableHead className="text-primary-subtext bg-inherit">User ID</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {filteredData.map((stream, index) => (
                    <motion.tr
                    key={stream.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="hover:bg-primary-accent/5"
                    >
                    <TableCell className="text-primary-text font-medium">{stream.songName}</TableCell>
                    <TableCell className="text-primary-text">{stream.artist}</TableCell>
                    <TableCell className="text-primary-subtext">
                        {new Date(stream.dateStreamed).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-primary-text">{formatNumber(stream.streamCount)}</TableCell>
                    <TableCell className="text-primary-subtext">{stream.userId}</TableCell>
                    </motion.tr>
                ))}
                </TableBody>
            </Table>
        </div>
      </div>
    </motion.div>
  )
}

export default StreamsTable;

