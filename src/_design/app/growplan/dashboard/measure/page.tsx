import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../../../../ui/Loading";

export default function MeasurePage() {
  const location = useLocation();
  const router = useNavigate();
  useEffect(() => {
    if (location.pathname !== "/growplan/dashboard") {
      setTimeout(() => {
        alert("서비스 준비 중입니다.");
        setTimeout(() => {
          router("/growplan");
        });
      }, 1000);
    }
  }, []);
  return <Loading.Spinner />;
}
