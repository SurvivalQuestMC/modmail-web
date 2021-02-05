import { DateTime } from 'luxon';
import { MemberState } from '../types';

export function getTimestampFromSnowflake(snowflake = '0'): DateTime | undefined {
    const snowflakeAsNumber = Number.parseInt(snowflake, 10) || 0;
    return DateTime.fromMillis(snowflakeAsNumber / 4194304 + 1420070400000);
}

export function getNameFromMemberState(member?: MemberState | null) {
    if (member) {
        return member.nickname || `${member.username}#${member.discriminator}`;
    }
    return '';
}
