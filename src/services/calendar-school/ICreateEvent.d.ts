export interface ICreateEvent {
  eventName: string
  description?: string
  eventType: $Enums.EventType;
  startDate: string
  endDate: string
  isRecurring?: boolean
  recurrenceType?: $Enums.RecurrenceType
  sendEmailReminder?: boolean
  daysBeforeToSend?: number
} 