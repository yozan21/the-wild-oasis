import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryclient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking Successfully deleted.");
      queryclient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteBooking };
}
