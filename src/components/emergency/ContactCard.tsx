import { FiPhone } from "react-icons/fi";

// 개별 연락처 데이터 타입
export interface ContactInfo {
  role: string;
  name: string;
  phone: string;
}

interface ContactCardProps {
  contacts: ContactInfo[];
}

const ContactCard = ({ contacts }: ContactCardProps) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      {contacts.map((contact, index) => (
        <div
          key={index}
          className="w-full bg-white rounded-[10px] px-4 py-1 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex items-center justify-between"
        >
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-medium">
              {contact.role}
            </span>
            <span className="text-[16px] font-bold text-gray-800 leading-tight">
              {contact.name}
            </span>
            {contact.phone && (
              <span className="text-[12px] text-gray-400">
                {contact.phone}
              </span>
            )}
          </div>

          <a
            href={`tel:${contact.phone}`}
            className="flex items-center gap-1.5 bg-[#0084FF] text-white px-3.5 py-2 rounded-[12px] shadow-sm active:scale-95 transition-transform"
          >
            <FiPhone className="text-sm" />
            <span className="text-[11px] font">전화</span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
