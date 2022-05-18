package org.syc.service;

import org.syc.dto.MemberDTO;

public interface MemberService {
	public void memberJoin(MemberDTO mdto);
	public MemberDTO memberLogin(MemberDTO mdto);
	public MemberDTO idOverRapCheck(String id);
	public void removeMember(String id);
	public void updateHavePlayer(String id);
	
}
