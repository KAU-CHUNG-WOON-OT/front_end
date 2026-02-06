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
    <div className="flex flex-col w-full">
      {contacts.map((contact, index) => (
        <div key={index} className="w-full">
          
          {/* 한 명의 정보 행 */}
          <div className="flex items-center justify-between py-1">
            <div className="flex flex-col">
              <span className="text-[11px] text-gray-400 font-medium mb-0.5">
                {contact.role}
              </span>
              <span className="text-[15px] font-bold text-gray-800">
                {contact.name}
              </span>
              {contact.phone && (
                <span className="text-[11px] text-gray-400 mt-0.5">
                  {contact.phone}
                </span>
              )}
            </div>
            
            <a 
              href={`tel:${contact.phone}`}
              className="flex items-center gap-1.5 bg-[#2F80ED] text-white px-5 py-2 rounded-xl shadow-sm active:scale-95 transition-transform"
            >
              <FiPhone className="text-sm" />
              <span className="text-xs font-bold">전화</span>
            </a>
          </div>
 
          {index < contacts.length - 1 && (
            <div className="h-[1px] bg-gray-50 my-3 w-full" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactCard;